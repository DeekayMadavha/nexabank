import {
    createContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import type {
    Session,
    User,
} from "@supabase/supabase-js";

import { supabase } from "@/services/supabase/client";
import type { AuthContextType } from "@/types/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
    children: ReactNode;
}

export function AuthProvider({ children }: Props) {
    // ==========================
    // State
    // ==========================

    const [user, setUser] = useState<User | null>(null);

    const [session, setSession] = useState<Session | null>(null);

    const [loading, setLoading] = useState(true);

    // ==========================
    // Check Current Session
    // ==========================

    useEffect(() => {
        const getCurrentSession = async () => {
            const { data } = await supabase.auth.getSession();

            setSession(data.session);

            setUser(data.session?.user ?? null);

            setLoading(false);
        };

        getCurrentSession();

        // Listen for login/logout events
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);

            setUser(session?.user ?? null);
        });

        // Cleanup listener
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    // ==========================
// Register User
// ==========================

    const signUp = async (
        email: string,
        password: string,
        fullName: string
    ) => {
        const { error } =
            await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                },
            });

        if (error) {
            throw error;
        }
    };

// ==========================
// Login User
// ==========================

    const signIn = async (
        email: string,
        password: string,
    ): Promise<void> => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            throw error;
        }
    };

// ==========================
// Logout User
// ==========================

    const signOut = async (): Promise<void> => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }
    };
    // ==========================
    // Context Provider
    // ==========================

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                loading,
                signUp,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
// User types
export interface User {
    email: string;
    password: string;
}

// Post types from JSONPlaceholder
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Auth context types
export interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

export function useAddToHomeScreenPrompt() {
    const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    const promptToInstall = () => {
        if (prompt) {
            return prompt.prompt();
        }

        return Promise.reject(
            new Error(
                'Tried installing before browser sent "beforeinstallprompt" event'
            )
        );
    };

    useEffect(() => {
        const ready = (e: BeforeInstallPromptEvent) => {
            e.preventDefault();
            setPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', ready as any);

        return () => {
            window.removeEventListener('beforeinstallprompt', ready as any);
        };
    }, []);

    return { prompt, promptToInstall };
}

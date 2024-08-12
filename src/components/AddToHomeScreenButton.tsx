import { useAddToHomeScreenPrompt } from '../hooks/useAddToHomeScreenPrompt';
import { Button } from '@chakra-ui/react';

export function AddToHomeScreenButton() {
    const { prompt, promptToInstall } = useAddToHomeScreenPrompt();

    if (!prompt) {
        return <></>;
    }

    return <Button onClick={promptToInstall}> Add to HomeScreen</Button>;
}

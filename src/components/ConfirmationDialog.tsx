import {
    useDisclosure,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
    ButtonGroup,
    Tooltip,
} from '@chakra-ui/react';
import { cloneElement, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface ConfirmationDialogProps {
    confirmationTitle?: string;
    confirmationMessage?: string;
    actionInitiator: JSX.Element;
    onActionInitiate?: () => void;
    action: () => void;
}

export function ConfirmationDialog({
    confirmationTitle,
    confirmationMessage,
    actionInitiator,
    onActionInitiate,
    action,
}: ConfirmationDialogProps) {
    const { t } = useTranslation('translation');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <Tooltip
                label={confirmationTitle || ''}
                isDisabled={!confirmationTitle}
            >
                {cloneElement(actionInitiator, {
                    onClick: () => {
                        onActionInitiate?.();
                        onOpen();
                    },
                })}
            </Tooltip>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        {confirmationTitle ? (
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                {confirmationTitle}
                            </AlertDialogHeader>
                        ) : null}

                        <AlertDialogBody>
                            {confirmationMessage || (
                                <>{t('confirmationDialog.info')}</>
                            )}
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <ButtonGroup gap="2">
                                <Button
                                    variant="outline"
                                    ref={cancelRef}
                                    onClick={onClose}
                                >
                                    {t('commons.cancel')}
                                </Button>
                                <Button
                                    onClick={() => {
                                        action();
                                        onClose();
                                    }}
                                    ml="3"
                                >
                                    {t('commons.ok')}
                                </Button>
                            </ButtonGroup>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

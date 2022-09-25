import { Group, Modal, useMantineTheme } from '@mantine/core';
import { Button, colors, shadows, Title, Text } from '../../../../design-system';

export function ConfirmRegenerationModal({
  isOpen,
  cancelAction,
  confirmAction,
}: {
  isOpen: boolean;
  cancelAction: () => void;
  confirmAction: () => void;
}) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={isOpen}
        overlayColor={theme.colorScheme === 'dark' ? colors.BGDark : colors.BGLight}
        overlayOpacity={0.7}
        styles={{
          modal: {
            backgroundColor: theme.colorScheme === 'dark' ? colors.B15 : colors.white,
          },
          body: {
            paddingTop: '5px',
          },
          inner: {
            paddingTop: '180px',
          },
        }}
        title={<Title size={2}>Caution</Title>}
        sx={{ backdropFilter: 'blur(10px)' }}
        shadow={theme.colorScheme === 'dark' ? shadows.dark : shadows.medium}
        radius="md"
        size="lg"
        onClose={() => {
          cancelAction();
        }}
      >
        <div>
          <Text>
            You are about to regenerate the API key of the selected environment. This action is irreversible and will
            render inoperative the access to the API of all your applications that use the current key. Proceed anyway?
          </Text>
          <Group position="right">
            <Button variant="outline" size="md" mt={30} onClick={() => cancelAction()}>
              No
            </Button>
            <Button mt={30} size="md" onClick={() => confirmAction()}>
              Yes
            </Button>
          </Group>
        </div>
      </Modal>
    </>
  );
}

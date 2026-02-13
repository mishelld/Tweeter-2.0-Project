import { Button, TextInput, Flex } from "@mantine/core";

function UserPage({ UserName }) {
  return (
    <Flex direction="column" gap="md">
      <TextInput description="User Name" placeholder="" value={UserName} />
      <Flex justify="flex-end">
        <Button variant="filled">Button</Button>;
      </Flex>
    </Flex>
  );
}
export default UserPage;

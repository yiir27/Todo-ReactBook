import { DeleteIcon } from "@chakra-ui/icons";
import { ListItem, Button, Flex, IconButton, Text} from "@chakra-ui/react";

export const TodoItem = ({todo, toggleTodoListItemStatus, deleteTodoListItem}) => {
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
    const handledeleteTodoListItem = () => deleteTodoListItem(todo.id);
    const label = todo.done ? "未完了リストへ" : "完了リスト";
    const setColorScheme = todo.done ? "pink" : "blue";
    return(
      <ListItem
        borderWidth="1px"
        p="4"
        mt="4"
        bg="white"
        borderRadius="md"
        borderColor="gray.300"
      >
        <Text mb="6">{todo.content}</Text>
        <Flex align="center" justify="flex-end">
          <Button 
            colorScheme={setColorScheme}
            variant="outline"
            size="sm"
            onClick={handleToggleTodoListItemStatus}
          >
            {label}
          </Button>
          <IconButton
            icon={<DeleteIcon />}
            variant="unstyled"
            aria-label="delete"
            onClick={handledeleteTodoListItem}
          />
        </Flex>
      </ListItem>
    );
  };
  
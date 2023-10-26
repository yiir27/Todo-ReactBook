import { Button, Textarea } from "@chakra-ui/react";

export const TodoAdd = ({placeholder, leftIcon, buttonText, inputEl, handleAddTodoListItem}) => {
    return (
      <>
          <Textarea
            placeholder={placeholder}
            bgColor="white"
            mt="8"
            border="gray.400"
            ref = {inputEl}
          />
          <Button
            onClick={handleAddTodoListItem}
            colorScheme="blue"
            leftIcon={leftIcon}
            mt="8"
          >
              {buttonText}
          </Button>
      </>
    );
  };

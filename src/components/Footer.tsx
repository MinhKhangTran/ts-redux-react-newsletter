import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../store/reducers/userReducer";

const Footer = () => {
  const [value, setValue] = React.useState("");
  const { error, newsletter, email } = useTypedSelector(
    (state) => state.userReducer
  );
  const { addNewsletter, clearNewsletter } = useAction();
  const toast = useToast();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    addNewsletter({ email: value });
    clearNewsletter();
    setValue("");
  };

  useEffect(() => {
    if (newsletter === "added") {
      toast({
        title: "Thanks for sub",
        description: "Sub successful",
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
    if (newsletter === "failed") {
      toast({
        title: "You are already sub",
        description: "Sub fail",
        status: "warning",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [newsletter, email]);

  console.log(error, newsletter, email);
  return (
    <Box py={8}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Newletter</FormLabel>
          <Flex>
            <Input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="enter your email"
            />
            <Button type="submit">Submit</Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};
export default Footer;

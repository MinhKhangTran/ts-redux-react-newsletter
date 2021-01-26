import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";
import { useEffect } from "react";

import { Box, Spinner, Heading, Text, Image } from "@chakra-ui/react";

const SinglePage = () => {
  const { id }: any = useParams();
  const { loading, error, post } = useTypedSelector(
    (state) => state.postReducer
  );
  const { getPostByID } = useAction();
  useEffect(() => {
    getPostByID(id);
  }, []);

  if (loading)
    return (
      <Box>
        <Spinner />
      </Box>
    );
  if (error)
    return (
      <Box>
        <Text>Error:/</Text>
      </Box>
    );
  console.log(post);

  return (
    <Box>
      <Heading>{post && post.title}</Heading>
      {post && <Text dangerouslySetInnerHTML={{ __html: post.content }} />}
      {post && <Image src={post.image} alt={post.title} />}
    </Box>
  );
};

export default SinglePage;

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Spinner,
  Grid,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const Home = () => {
  const { posts, loading, error, page, end } = useTypedSelector(
    (state) => state.postReducer
  );
  const { getPost } = useAction();
  const dispatch = useDispatch();
  // Init paginated post
  useEffect(() => {
    getPost({}, 1, "desc", 6);
  }, [dispatch]);
  // console.log(posts, loading, error);

  const loadMore = () => {
    const nextPage = page + 1;
    getPost(posts, nextPage, "desc", 6);
  };

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
  return (
    <Box>
      <Heading color="orange.600">Newsy!</Heading>
      <Grid
        gap={6}
        my={8}
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(4,1fr)" }}
      >
        {posts?.map((post) => {
          const { id, author, excerpt, image, title } = post;
          return (
            <Box bg="orange.50" p={4} borderRadius="md" key={id}>
              <Text fontWeight="bold">{title}</Text>
              <Text>{author}</Text>
              <Image
                boxSize="200px"
                objectFit="cover"
                src={image}
                alt={title}
              />
              <Text>{excerpt}</Text>
              <Button mt={6} colorScheme="orange" variant="ghost">
                <Link to={`/article/${id}`}>Read More</Link>
              </Button>
            </Box>
          );
        })}
      </Grid>
      {!end && (
        <Button onClick={loadMore} colorScheme="orange" mt={8}>
          Load More
        </Button>
      )}
    </Box>
  );
};

export default Home;

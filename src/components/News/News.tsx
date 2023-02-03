import { Center, Flex, Grid, Heading } from "@chakra-ui/react";
import { newsList } from "./content";
import NewsBox from "./NewsBox";

const News = () => {
  return (
    <Flex w="full" flexDir={"column"}>
      <Center w="full">
        <Heading
          fontSize={{ base: "42px", lg: "132px" }}
          fontWeight="bold"
          fontFamily={"OpenSans-bold"}
          lineHeight="180px"
          pb={{ base: "26px", lg: "23px" }}
        >
          Novedades
        </Heading>
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="3px"
      >
        {newsList.map(({ id, title, description, color, backgroundPhoto }) => (
          <NewsBox
            key={id}
            title={title}
            description={description}
            color={color}
            backgroundPhoto={backgroundPhoto}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default News;

import { Box, Flex, Grid } from "@mantine/core";
import React, { memo } from "react";

const ItemsPost: React.FC = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        margin: "0 auto",
        width: "100%",
      }}
      grow
    >
      <Grid.Col
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
        span={3}
      >
        <Flex
          sx={{
            maxWidth: "300px",
            width: "100%",
            justifyContent: "center",
            height: "400px",
            background: "black",
            borderRadius: "8px",
            ":hover": {
              boxShadow: "0px 4px 6px 0px rgb(101, 100, 100)",
            },
          }}
        ></Flex>
      </Grid.Col>
      <Grid.Col
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
        span={3}
      >
        <Flex
          sx={{
            maxWidth: "300px",
            width: "100%",
            justifyContent: "center",
            height: "400px",
            background: "pink",
            borderRadius: "8px",
            ":hover": {
              boxShadow: "0px 4px 6px 0px rgb(101, 100, 100)",
            },
          }}
        ></Flex>
      </Grid.Col>
      <Grid.Col
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
        span={3}
      >
        <Flex
          sx={{
            maxWidth: "300px",
            width: "100%",
            justifyContent: "center",
            height: "400px",
            background: "black",
            borderRadius: "8px",
            ":hover": {
              boxShadow: "0px 4px 6px 0px rgb(101, 100, 100)",
            },
          }}
        ></Flex>
      </Grid.Col>
      <Grid.Col
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
        span={3}
      >
        <Flex
          sx={{
            maxWidth: "300px",
            width: "100%",
            justifyContent: "center",
            height: "400px",
            background: "pink",
            borderRadius: "8px",
            ":hover": {
              boxShadow: "0px 4px 6px 0px rgb(101, 100, 100)",
            },
          }}
        ></Flex>
      </Grid.Col>
    </Grid>
  );
};

export default memo(ItemsPost);

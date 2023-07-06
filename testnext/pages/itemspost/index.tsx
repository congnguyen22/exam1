import { Box, Flex, Grid, Text } from "@mantine/core";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { RegisterListNews } from "../../store/slice/getItemsNews/selector";

const ItemsPost: React.FC = () => {
  const data = useSelector(RegisterListNews);
  return (
    <Grid
      sx={{
        display: "flex",
        margin: "0 auto",
        width: "100%",
      }}
      grow
    >
      {data.map((v, i) => {
        return (
          <Grid.Col
            key={i}
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
                background: `url(${v.anhDaiDien})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "contain",
                position: "relative",
                borderRadius: "8px",
                border: "1px solid rgb(101, 100, 100)",
                ":hover": {
                  boxShadow: "0px 4px 6px 0px rgb(101, 100, 100)",
                },
              }}
            >
              <Text
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  color: "white",
                  fontWeight: 400,
                  fontSize: "12px",
                  margin: "20px 20px 30px 20px",
                  lineHeight: "14px",
                  background: "rgb(131, 126, 126)",
                  borderRadius: "8px",
                  padding: "5px 5px 5px 5px",
                  border: "1px solid grey",
                }}
              >
                {data[i]?.tieuDe}
              </Text>
              <Text
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "white",
                  fontWeight: 900,
                  fontSize: "18px",
                  margin: "20px 20px 30px 20px",
                  lineHeight: "30px",
                }}
              >
                {data[i]?.tieuDe}
              </Text>
            </Flex>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default memo(ItemsPost);

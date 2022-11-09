import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    console.log("req query", req.query);
    const { size = 10, curPage = 0 } = req.query;
    const total = 1000;

    const result = [];
    for (let index = 0; index < size; index++) {
      result.push({
        title: faker.lorem.words(),
        name: faker.name.fullName(),
        img: faker.image.abstract(),
        like: faker.datatype.number(500),
        view: faker.datatype.number(1000),
      });
    }
    return res.status(200).json({
      code: 200,
      result: {
        list: result,
        pagination: {
          curPage,
          totalCnt: total,
        },
      },
      message: "",
    });
  }

  res
    .status(200)
    .json({
      response: [
        {
          title: faker.lorem.words(),
          name: faker.name.fullName(),
          img: faker.image.abstract(),
          like: faker.datatype.number(500),
          view: faker.datatype.number(1000),
        },
      ],
    });
}

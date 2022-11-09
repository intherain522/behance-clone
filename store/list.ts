import create from "zustand";

type ListStoreState = {
  list: any[];
  getList: () => void;
};

const useStoreList = create<ListStoreState>((set, get) => ({
  list: [],
  getList: async () => {
    try {
      const response = await fetch("/api/data");
      console.log("response", response);
      const responseJson = await response.json();
      console.log("responseJson", responseJson);
      set(() => ({
        list: responseJson.result,
      }));
    } catch (error) {
      console.log("error", error);
    }
  },
}));

/**
 * requestㅇㅔ는 헤더, 바디,
 * postId: 1,
 * {
 *  data: {
 *    postId: 1,
 *  },
 *  hearder: {
 *    headerData: 1000
 *  }
 * }
 */

// const useStoreBoard = create<BoardStoreState>()(
//   // [["zustand/devtools", TipStoreState]]
//   devtools((set, get) => ({
//     boards: [],
//     board: {},
//     pageNo: 1,
//     totalCnt: 0,
//     setBoard: (board) => {
//       set(() => ({
//         board,
//       }));
//     },
//     getBoards: async ({ data }: Request<BoardRequest>) => {
//       try {
//         console.log("getBoards!");
//         const response: AxiosResponse<Response<BoardResponse>> =
//           await mainService.getBoard({ data });

//         console.log("boardlist response", response);
//         const newList = response.data.result?.list;
//         set(() => ({
//           boards: newList ?? [],
//           board: newList?.length !== 0 ? newList![0] : undefined,
//           totalCnt: response.data.result?.totalCnt,
//         }));
//       } catch (error) {
//         console.log("getBoards! error", error);
//       }
//     },
//     getBoardId: async ({ data }: Request<BoardIdRequest>) => {
//       try {
//         console.log("getBoardId!");
//         const response: AxiosResponse<Response<BoardIdResponse>> =
//           await mainService.getBoardId({ data });

//         return response.data.result;
//       } catch (error) {
//         console.log("getBoards! error", error);
//         return undefined;
//       }
//     },
//     // allGetBoards: async () => {
//     //   if (useStoreGroup.getState().groups.length === 0) {
//     //   }
//     // },
//   })),
// );

export default useStoreList;

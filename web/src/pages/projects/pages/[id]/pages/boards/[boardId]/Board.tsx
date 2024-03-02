import Default from "@components/layout/Default.tsx";
import { useState } from "react";
import { ProjectBoard } from "shared";
import useGetByParams from "@/hooks/useGetByParams.ts";
import { getBoardById } from "@/api/boards.ts";
import { Card, CardContent } from "@components/ui/Card.tsx";
import { Skeleton } from "@components/ui/Skeleton.tsx";
import moment from "moment/moment";

const Board = () => {
  const board = useGetByParams(getBoardById);

  return (
    <Default>
      {!board.loading && board.data ? (
        <Card className="h-12 flex items-center">
          <CardContent className="py-0 flex justify-between w-full">
            <h2>{board.data.name}</h2>
            <p className="text-sm flex justify-center items-center text-muted-foreground">
              Измененена: {moment(board.data.updatedAt).locale("ru").fromNow()}
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <Skeleton className="h-12"></Skeleton>
        </>
      )}
    </Default>
  );
};

export default Board;

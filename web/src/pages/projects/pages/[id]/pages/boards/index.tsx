import AddBoard from "@/pages/projects/pages/[id]/components/AddBoard.tsx";
import useGetRows from "@/hooks/useGetRows.ts";
import { getBoardsByProject } from "@/api/boards.ts";
import { ProjectWithMembers } from "@/api/projects.ts";
import { ScrollArea, ScrollBar } from "@components/ui/ScrollArea.tsx";
import Board, { FakeBoard } from "@components/ui/board/Board.tsx";
import React from "react";

const Boards = (props: ProjectWithMembers) => {
  return (
    <div>
      <AddBoard id={props.id} />
      <div className="flex flex-wrap gap-2 mt-2">
        {props.boards.map((board) => (
          <Board key={board.id} {...board} />
        ))}
      </div>
    </div>
  );
};

const fakeBoards = [];

//иду до нуля что бы не перескатся ключами с основными каточками
for (let index = -2; index < 0; index++) {
  fakeBoards.push(<FakeBoard key={index} />);
}

export const FakeBoards = () => {
  return (
    <div>
      <AddBoard id={-1} />
      <div className="flex flex-wrap gap-2 mt-2">{fakeBoards}</div>
    </div>
  );
};

export default Boards;

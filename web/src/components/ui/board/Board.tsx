import { ProjectBoard } from "shared";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/Card.tsx";
import moment from "moment";
import { Link } from "react-router-dom";
import { Skeleton } from "@components/ui/Skeleton.tsx";

const Board = (props: ProjectBoard) => {
  return (
    <Card className="h-36 w-80 hover:bg-muted relative">
      <CardContent className="p-4">
        <div>{props.name}</div>
        <p className="text-sm text-muted-foreground">
          Измененена: {moment(props.updatedAt).locale("ru").fromNow()}
        </p>
      </CardContent>
      <Link
        to={`/projects/${props.projectId}/boards/${props.id}`}
        className="w-full h-full absolute left-0 top-0"
      />
    </Card>
  );
};

export const FakeBoard = () => {
  return <Skeleton className="h-36 w-80" />;
};

export default Board;

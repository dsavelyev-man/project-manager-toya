import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { Button } from "@components/ui/Button.tsx";

const Actions = (props: { id: number }) => {
  return (
    <div>
      <Link to={`/projects/${props.id}/settings`}>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
      </Link>
    </div>
  );
};

export default Actions;

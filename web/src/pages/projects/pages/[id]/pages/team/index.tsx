import { getProjectTeamById } from "@/api/projects.ts";
import useGetById from "@/hooks/useGetById.ts";
import Default from "@components/layout/Default.tsx";
import { Card } from "@components/ui/Card.tsx";
import { Button } from "@components/ui/Button.tsx";
import { UserRoundPlus } from "lucide-react";

const TeamPage = () => {
  const team = useGetById(getProjectTeamById);

  return (
    <Default>
      <Card className="p-2 flex justify-between">
        <div className="flex items-center">
          <h2>Команда</h2>
        </div>
        <Button>
          Добавить
          <UserRoundPlus className="ml-2 h-4 w-4" />
        </Button>
      </Card>
    </Default>
  );
};

export default TeamPage;

import { useState } from "react";
import TextInput from "@components/ui/TextInput.tsx";
import AnimatedHeight from "@components/ui/AnimatedHeight.tsx";
import useFormWithRequest from "@/hooks/useFormWithRequest.ts";
import createProject from "@/api/projects.ts";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@components/ui/Card.tsx";
import { Button } from "@components/ui/Button.tsx";

const CreateProject = () => {
  const navigate = useNavigate();
  const form = useFormWithRequest(
    {
      name: "",
    },
    createProject,
    (project) => {
      navigate(`/projects/${project.id}`);
    },
  );

  return (
    <AnimatedHeight className="mt-6 shadow-xl w-full relative">
      <Card className="pt-6">
        <CardContent>
          <form
            onSubmit={form.onSubmit}
            className="max-w-[320px] flex flex-col gap-4 items-start"
          >
            <TextInput
              value={form.data.name}
              onChange={(e) => form.onChange("name", e.target.value)}
              label="Название проекта"
            />
            <Button type="submit">Создать</Button>
          </form>
        </CardContent>
      </Card>
    </AnimatedHeight>
  );
};

export default CreateProject;

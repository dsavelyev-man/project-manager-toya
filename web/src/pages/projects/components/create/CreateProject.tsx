import { useState } from "react";
import TextInput from "@components/ui/TextInput.tsx";
import AnimatedHeight from "@components/ui/AnimatedHeight.tsx";
import useFormWithRequest from "@/hooks/useFormWithRequest.ts";
import createProject from "@/api/projects.ts";
import { useNavigate } from "react-router-dom";

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
    <AnimatedHeight className="card bg-base-100 shadow-xl w-full">
      <div className="card-body">
        <form
          onSubmit={form.onSubmit}
          className="max-w-[320px] flex flex-col gap-4 items-start"
        >
          <TextInput
            value={form.data.name}
            onChange={(e) => form.onChange("name", e.target.value)}
            label="Название проекта"
          />
          <button type="submit" className="btn">
            Создать
          </button>
        </form>
      </div>
    </AnimatedHeight>
  );
};

export default CreateProject;

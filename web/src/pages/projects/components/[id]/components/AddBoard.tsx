import { Button } from "@components/ui/Button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@components/ui/Dialog.tsx";
import { Label } from "@components/ui/Label.tsx";
import { Input } from "@components/ui/Input.tsx";
import { createBoard } from "@/api/boards.ts";
import useFormWithRequest from "@/hooks/useFormWithRequest.ts";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBoard = (props: { id: number }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const form = useFormWithRequest(
    {
      name: "",
      projectId: props.id,
    },
    createBoard,
    (result) => {
      setOpen(false);
      navigate(`/projects/${props.id}/boards/${result.id}`);
    },
  );

  return (
    <div className="justify-end flex mt-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Добавить доску</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>Создать доску</DialogHeader>
          <DialogDescription>
            Добавтье доску в которой будет работать ваша команда
          </DialogDescription>
          <form className="space-y-4" onSubmit={form.onSubmit}>
            <div className="space-y-1">
              <Label htmlFor="name">Название</Label>
              <Input
                onChange={(e) => form.onChange("name", e.target.value)}
                placeholder="Рабочая доска"
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Создать</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddBoard;

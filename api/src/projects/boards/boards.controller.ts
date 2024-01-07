import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { AuthGuard } from '../../auth/auth.guard';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('projects/boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req, @Body() createBoardDto: CreateBoardDto) {
    return this.boardsService.create(createBoardDto, req.user);
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
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

  @Get('by-project/:id')
  @UseGuards(AuthGuard)
  getByProject(@Param('id') id: string, @Req() req) {
    return this.boardsService.getByProject(+id, req.user);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getById(@Param('id') id: string, @Req() req) {
    return this.boardsService.getById(+id, req.user);
  }
}

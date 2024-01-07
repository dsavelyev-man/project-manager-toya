import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { AuthGuard } from '../../auth/auth.guard';
import { ClickLinkDto } from './dto/click-link.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  create(@Body() createLinkDto: CreateLinkDto) {
    return 'test';
  }

  @Patch('click')
  @UseGuards(AuthGuard)
  click(@Req() req, @Body() clickLinkDto: ClickLinkDto) {
    return this.linksService.click(clickLinkDto, req.user);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Req() req) {
    return this.linksService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
    return this.linksService.update(+id, updateLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linksService.remove(+id);
  }
}

import * as React from 'react';
var { RunApp } = require('koa-cola');
var {
  Controller,
  Get,
  Use,
  Param,
  Body,
  Delete,
  Put,
  Post,
  QueryParam,
  View,
  Ctx,
  Response
} = require('koa-cola').Decorators.controller;
var request = require('superagent');
@Controller('')
class FooController {
  @Post('/postreceive')
  postreceive(@Body() body) {
    console.log(body);
    var shell = require('shelljs');
    shell.cd(`public`);
    shell.exec('git pull');
    shell.cp('./*.html', './doc/')
  }
}
RunApp({
  config: {
    port: 80
  },
  controllers: {
    FooController: FooController
  },
  pages: {}
});

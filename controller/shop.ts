import { Request, Response } from "express";

exports.create = (req: Request, res: Response) => {
  console.log("shop_create");
};

exports.getAll = (req: Request, res: Response) => {
  console.log("shop_getall");
};

exports.getById = (req: Request, res: Response) => {
  console.log("shop_getById");
};

exports.update = (req: Request, res: Response) => {
  console.log("shop_update");
};

exports.delete = (req: Request, res: Response) => {
  console.log("shop_delete");
};

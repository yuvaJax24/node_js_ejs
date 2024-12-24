import { Request, Response } from "express";

exports.create = (req: Request, res: Response) => {
  console.log("admin_create");
};

exports.getAll = (req: Request, res: Response) => {
  console.log("admin_getall");
};

exports.getById = (req: Request, res: Response) => {
  console.log("admin_getById");
};

exports.update = (req: Request, res: Response) => {
  console.log("admin_update");
};

exports.delete = (req: Request, res: Response) => {
  console.log("admin_delete");
};

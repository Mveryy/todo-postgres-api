import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export const GetAllTasksController = async (req: Request, res: Response) => {
    try {
      const tasks = await prismaClient.tasks.findMany()
      return res.status(200).send(tasks)
    } catch (error) {
      return res.status(400).send(error)
    }
  }
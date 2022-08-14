import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export const UpdateTaskController = async (req: Request, res: Response) => {
    const task_id = req.params.id
    const {done} = req.body

    if (done === undefined) 
    return res.status(400).send("Field 'done' is required")

    if (typeof done !== 'boolean') 
    return res.status(400).send("Field 'done' must contain a Boolean value")

    const taskExist = await prismaClient.tasks.findFirst({
      where: {
        id: +task_id
      }
    })

    if (!taskExist) return res.status(404).send("Task ID not found")

    try {
      const task = await prismaClient.tasks.update({
        where: {
          id: +task_id
        }, data: {
          done
        }
      })
      return res.status(200).send(task) 
      
    } catch (error) {
      return res.status(400).send(error)
    }
  }
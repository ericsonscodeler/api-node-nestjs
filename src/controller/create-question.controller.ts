import { Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { PrismaService } from 'src/prisma/prisma.service'
// import { z } from 'zod'

// const authenticateAccountSchema = z.object({
//   email: z.string().email(),
//   password: z.string(),
// })

// type AuthenticateBodySchema = z.infer<typeof authenticateAccountSchema>

@Controller('/questions')
@UseGuards(AuthGuard('jwt'))
// @UsePipes(new ZodValidationPipe(authenticateAccountSchema))
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle() {
    return 'ok'
  }
}

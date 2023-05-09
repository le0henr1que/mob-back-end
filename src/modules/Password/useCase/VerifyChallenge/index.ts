import { PrismaVerifyCodeChellange } from '../../repositories/VerifyChallenge/implementation/PrismaVerifyChallenge';
import { VerifyChallengeUseCase } from './VerifyCodeChallengeUseCase';
import { VerifyChallengeController } from './VerifyCodeChallengeController';

const prismaVerifyCodeChellange = new PrismaVerifyCodeChellange();

const verifyCodeChallengeUseCase = new VerifyChallengeUseCase(prismaVerifyCodeChellange);
const verifyCodeChallengeController = new VerifyChallengeController(verifyCodeChallengeUseCase);

export { verifyCodeChallengeUseCase, verifyCodeChallengeController };

import { AuthGuard } from '@nestjs/passport'
import { Injectable, ExecutionContext } from '@nestjs/common'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): boolean {
        return true;
    }
}

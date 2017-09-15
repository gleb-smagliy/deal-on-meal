
import { saga as roomsSaga } from '../modules/room-service';

export default function* (args)
{
  yield roomsSaga(args);
}

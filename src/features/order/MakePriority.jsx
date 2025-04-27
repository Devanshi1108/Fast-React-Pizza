import { useFetcher } from "react-router-dom";
import Buttons from "../../ui/Buttons";
import { updateOrder } from "../../services/apiRestaurant";
function MakePriority({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Buttons type="primary">Make Priority</Buttons>
    </fetcher.Form>
  );
}

export default MakePriority;
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderID, data);

  return null;
}

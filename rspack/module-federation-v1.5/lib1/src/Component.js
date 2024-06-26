import { formatRelative, subDays } from 'date-fns';
import { useEffect, useState } from 'react';
// date-fns is a shared module, but used as usual
// exposing modules act as async boundary,
// so no additional async boundary need to be added here
// As data-fns is an shared module, it will be placed in a separate file
// It will be loaded in parallel to the code of this module

const Component = ({ locale }) => {
  let [cnt, setCnt] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCnt((x) => x + 1);
    }, 1000);
  }, []);
  return (
    <div style={{ border: '5px solid darkblue' }}>
      <div>cnt: {cnt}</div>
      <p>I'm a Component exposed from container B!</p>
      <p>
        Using date-fn in Remote: {formatRelative(subDays(new Date(), 2), new Date(), { locale })}
      </p>
    </div>
  );
};
export default Component;

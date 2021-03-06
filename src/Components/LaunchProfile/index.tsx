import * as React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

interface props {
  id: number
}

const LaunchProfileContainer: React.FC<props> = ({id}) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });
  React.useEffect(() => {
      refetch()
  }, [id])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;

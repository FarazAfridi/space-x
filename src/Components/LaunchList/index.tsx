import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList from "./LaunchList";
import {OwnProps} from './LaunchList';

 
const LaunchListComponent = (props: OwnProps) => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>

    return (
        <LaunchList data={data} {...props} />
    )
}
 
export default LaunchListComponent;
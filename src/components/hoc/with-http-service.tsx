import React from 'react';
import { HttpServiceContext }  from '../http-service-context/http-service-context';

export const withHttpService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <HttpServiceContext.Consumer>
        {
          (httpService) => {
            return (<Wrapped {...props} httpService = {httpService}/>);
          }
        }
      </HttpServiceContext.Consumer>
    );
  }
}
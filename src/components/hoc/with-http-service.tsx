import React from 'react';
import { httpServiceContext }  from '../http-service-context/http-service-context';

export const withHttpService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <httpServiceContext.Consumer>
        {
          (httpService) => {
            return (<Wrapped {...props} httpService = {httpService}/>);
          }
        }
      </httpServiceContext.Consumer>
    );
  }
}
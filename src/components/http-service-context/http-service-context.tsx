import React from 'react';
import HttpService from '../../services/http-service';

const httpService = new HttpService();

export const HttpServiceContext = React.createContext(httpService);
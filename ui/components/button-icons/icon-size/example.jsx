// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../base/example';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <ButtonIcon className="slds-button--icon" />
);

export let states = [
  {
    id: 'button-icon-size-large',
    label: 'Large',
    element: <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--large" />
  },
  {
    id: 'button-icon-size-small',
    label: 'Small',
    element: <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--small" />
  },
  {
    id: 'button-icon-size-x-small',
    label: 'x-Small',
    element: <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--x-small" />
  }
];
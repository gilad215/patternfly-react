import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';
import { Notification } from '../index';
import { NotifDrawer } from '../NotifDrawer/index';
import { Icon } from '../../Icon';
import { MenuItem } from '../../MenuItem';
import { Button } from '../../Button';

const handleClick = e => {
  e.preventDefault();
  action('some on click')();
};
const expandedBool = boolean('Expanded Drawer', false);
const hideBool = false;
const basicNotifDrawerStory = stories => {
  stories.addWithInfo('Notification Drawer', '', () => {
    const story = (
      <nav className="navbar navbar-pf-vertical">
        <nav className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right navbar-iconic">
            <li className="drawer-pf-trigger open">
              <a href="#0" className="nav-item-iconic" onClick={handleClick}>
                <span className="fa fa-bell" title="Notifications" />
                <span className="badge badge-pf-bordered" />
              </a>
            </li>
          </ul>
        </nav>
        <NotifDrawer
          expanded={boolean('Expanded Drawer', false)}
          hide={hideBool}
        >
          <NotifDrawer.Title id="1" title="Notifications" />
          <NotifDrawer.Accordion style={{ overflowY: 'hidden' }}>
            <NotifDrawer.Panel>
              <NotifDrawer.PanelHeading>
                <NotifDrawer.PanelTitle>
                  <a onClick={handleClick} aria-expanded="true">
                    Notification Tab 1
                  </a>
                </NotifDrawer.PanelTitle>
                <NotifDrawer.PanelCounter>1 New Event</NotifDrawer.PanelCounter>
              </NotifDrawer.PanelHeading>
              <NotifDrawer.PanelCollapse
                collapseIn
                aria-expanded="true"
                id="fixedCollapseOne"
              >
                <NotifDrawer.PanelBody
                  style={{ maxHeight: 550, overflowY: 'auto' }}
                >
                  <Notification expanded={expandedBool}>
                    <NotifDrawer.Dropdown pullRight id="Dropdown1">
                      <MenuItem eventKey="1" active>
                        Action
                      </MenuItem>
                      <MenuItem eventKey="2">Another Action</MenuItem>
                      <MenuItem eventKey="3">Delete</MenuItem>
                    </NotifDrawer.Dropdown>
                    <Icon className="pull-left" type="pf" name="info" />
                    <Notification.Content>
                      <Notification.Message>
                        Info Notification
                      </Notification.Message>
                      <Notification.Info date="3/31/16" time="12:12:44 PM" />
                    </Notification.Content>
                  </Notification>
                  <Notification unread expanded={expandedBool}>
                    <NotifDrawer.Dropdown pullRight id="Dropdown1">
                      <MenuItem eventKey="1" active>
                        Action
                      </MenuItem>
                      <MenuItem eventKey="2">Another Action</MenuItem>
                      <MenuItem eventKey="3">Delete</MenuItem>
                    </NotifDrawer.Dropdown>
                    <Icon className="pull-left" type="pf" name="ok" />
                    <Notification.Content>
                      <Notification.Message>
                        Unread Notification
                      </Notification.Message>
                      <Notification.Info date="3/31/16" time="12:12:44 PM" />
                    </Notification.Content>
                  </Notification>
                  <Notification expanded={expandedBool}>
                    <NotifDrawer.Dropdown pullRight id="DropDown2">
                      <MenuItem eventKey="1" active>
                        Action
                      </MenuItem>
                      <MenuItem eventKey="2">Another Action</MenuItem>
                      <MenuItem eventKey="3">Delete</MenuItem>
                    </NotifDrawer.Dropdown>
                    <Icon
                      className="pull-left"
                      type="pf"
                      name="warning-triangle-o"
                    />
                    <Notification.Content>
                      <Notification.Message>
                        Another Event Notification that is really long to see
                        how it reacts on smaller screens sizes.
                      </Notification.Message>
                      <Notification.Info date="3/31/16" time="12:12:44 PM" />
                    </Notification.Content>
                  </Notification>
                  <Notification expanded={expandedBool}>
                    <NotifDrawer.Dropdown pullRight id="Dropdown3">
                      <MenuItem eventKey="1" active>
                        Action
                      </MenuItem>
                      <MenuItem eventKey="2">Another Action</MenuItem>
                      <MenuItem eventKey="3">Delete</MenuItem>
                    </NotifDrawer.Dropdown>
                    <Icon
                      className="pull-left"
                      type="pf"
                      name="error-circle-o"
                    />
                    <Notification.Content>
                      <Notification.Message>
                        Error Notification
                      </Notification.Message>
                      <Notification.Info date="3/31/16" time="12:12:44 PM" />
                    </Notification.Content>
                  </Notification>
                  <Notification loading />
                </NotifDrawer.PanelBody>
                <NotifDrawer.PanelAction>
                  <NotifDrawer.PanelActionLink
                    className="drawer-pf-action-link"
                    data-toggle="mark-all-read"
                  >
                    <Button bsStyle="link">Mark All Read</Button>
                  </NotifDrawer.PanelActionLink>
                  <NotifDrawer.PanelActionLink data-toggle="clear-all">
                    <Button bsStyle="link">
                      <Icon type="pf" name="close" />
                      Clear All
                    </Button>
                  </NotifDrawer.PanelActionLink>
                </NotifDrawer.PanelAction>
              </NotifDrawer.PanelCollapse>
            </NotifDrawer.Panel>
            <NotifDrawer.Panel>
              <NotifDrawer.PanelHeading>
                <NotifDrawer.PanelTitle>
                  <a
                    onClick={handleClick}
                    aria-expanded="false"
                    className="collapsed"
                  >
                    Notification Tab 2
                  </a>
                </NotifDrawer.PanelTitle>
                <NotifDrawer.PanelCounter>
                  2 New Events
                </NotifDrawer.PanelCounter>
              </NotifDrawer.PanelHeading>
            </NotifDrawer.Panel>
          </NotifDrawer.Accordion>
        </NotifDrawer>
      </nav>
    );
    return inlineTemplate({
      title: 'Notification Drawer',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
      }notification-drawer`,
      story
    });
  });
};

export default basicNotifDrawerStory;

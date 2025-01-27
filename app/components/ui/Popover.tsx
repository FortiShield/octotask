import * as Popover from '@radix-ui/react-popover';
import type { PropsWithChildren, ReactNode } from 'react';

export default ({ children, trigger }: PropsWithChildren<{ trigger: ReactNode }>) => (
  <Popover.Root>
    <Popover.Trigger asChild>{trigger}</Popover.Trigger>
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content
        sideOffset={10}
        side="top"
        align="center"
        className="bg-octotask-elements-background-depth-2 text-octotask-elements-item-contentAccent p-2 rounded-md shadow-xl z-workbench"
      >
        {children}
        <Popover.Arrow className="bg-octotask-elements-item-background-depth-2" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

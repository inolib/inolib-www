import React from "react";
import { useMenuTriggerState } from "@react-stately/menu";
import { useMenuTrigger } from "@react-aria/menu";
import { useButton } from "@react-aria/button";
import { useOverlay, DismissButton, OverlayContainer } from "@react-aria/overlays";
import { useMenu, useMenuItem } from "@react-aria/menu";
import { FocusScope } from "@react-aria/focus";
import { Item, Section } from "@react-stately/collections";
import { AriaMenuProps } from "@react-types/menu";
import { TreeState, useTreeState } from "@react-stately/tree";
import { Button } from "~/components/UI/Button";
import Link from "next/link";

// Composant principal du menu
function MyMenuComponent() {
  let state = useMenuTriggerState({});
  let ref = React.useRef<HTMLButtonElement | null>(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
  let { buttonProps } = useButton(menuTriggerProps, ref);

  return (
    <>
      <button {...buttonProps} ref={ref} aria-label="Menu">
        ☰
      </button>
      {state.isOpen && (
        <OverlayContainer>
          <Popover state={state}>
            <Menu onAction={(key) => console.log(key)}>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Item key="audit">
                <Link href="/pages/audit">Auditer</Link>
              </Item>
              <Item key="accompagner">
                <Link href="/pages/accompagner">Accompagner</Link>
              </Item>
              <Item key="developpement">
                <Link href="/pages/developpement">Developper</Link>
              </Item>
              <Item key="former">
                <Link href="/pages/former">Formations</Link>
              </Item>
              <Item key="apropos">
                <Link href="/pages/ABout">A propos</Link>
              </Item>
              <Item key="blog">
                <Link href="/blog">Blog</Link>
              </Item>
              <Item key="contact">
                <Link href="/pages/contact">
                  <Button variant="buttonNoir">Nous contacter</Button>
                </Link>
              </Item>
            </Menu>
          </Popover>
        </OverlayContainer>
      )}
    </>
  );
}

// Composant Popover
export function Popover({ state, children }: { state: any; children: React.ReactNode }) {
  let ref = React.useRef<HTMLDivElement | null>(null);

  let { overlayProps } = useOverlay(
    {
      onClose: state.close,
      shouldCloseOnBlur: true,
      isOpen: state.isOpen,
      isDismissable: true,
    },
    ref,
  );

  return (
    <FocusScope restoreFocus>
      <div {...overlayProps} ref={ref} style={{ border: "1px solid gray", padding: "10px", background: "white" }}>
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </FocusScope>
  );
}

// Composant Menu
export function Menu(props: AriaMenuProps<any>) {
  let state = useTreeState(props);
  let ref = React.useRef<HTMLUListElement | null>(null);
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref} style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {[...state.collection].map((item) => (
        <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}

// Composant MenuItem
export function MenuItem({ item, state }: { item: any; state: TreeState<unknown> }) {
  let ref = React.useRef<HTMLLIElement | null>(null);
  let { menuItemProps } = useMenuItem({ key: item.key }, state, ref);

  return (
    <li {...menuItemProps} ref={ref} style={{ padding: "5px", cursor: "pointer" }}>
      {item.rendered}
    </li>
  );
}

// Composant DropdownMenuLabel
export function DropdownMenuLabel({ children }: { children: React.ReactNode }) {
  return <li style={{ padding: "5px", fontWeight: "bold" }}>{children}</li>;
}

// Composant DropdownMenuSeparator
export function DropdownMenuSeparator() {
  return <li style={{ borderBottom: "1px solid gray", margin: "5px 0" }} />;
}

export default MyMenuComponent;

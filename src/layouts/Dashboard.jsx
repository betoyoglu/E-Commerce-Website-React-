import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { GridRow, GridColumn, Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories></Categories>
          </GridColumn>
          <GridColumn width={12}>
            <ProductList></ProductList>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

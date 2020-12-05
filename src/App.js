import React from "react";
import { AppProvider, Page, Card, Layout } from "@shopify/polaris";
import PointsTable from "./components/PointsTable";
import BonusTable from "./components/BonusTable";

import { userData, bonusData, points } from "../../data/data";
import { timeInSeconds } from "../../helpers/helpers";

const App = () => {
  const sortTable = (rows, index, direction, time = false) => {
    return [...rows].sort((rowA, rowB) => {
      const totalA = rowA[index];
      const totalB = rowB[index];

      // time specific sorting
      if (time) {
        return direction === "descending"
          ? timeInSeconds(totalB) - timeInSeconds(totalA)
          : timeInSeconds(totalA) - timeInSeconds(totalB);
      }
      return direction === "descending" ? totalB - totalA : totalA - totalB;
    });
  };

  return (
    <AppProvider features={{ newDesignLanguage: true }} i18n={{}}>
      <Page title="December Solitaire">
        <Layout>
          <Layout.Section>
            <Card title="Leader table">
              <PointsTable
                data={userData}
                points={points}
                sort={sortTable}
                bonuseData={bonusData}
              />
            </Card>
          </Layout.Section>

          <Layout.Section secondary>
            <Card title="Fastest solves">
              <BonusTable data={bonusData} sort={sortTable} />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
};

export default App;

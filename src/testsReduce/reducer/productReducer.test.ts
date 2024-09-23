// reducer.test.tsx
import { fetchData } from "../../app/action/productAction";
import axios from "axios";
import { AnyAction } from "redux";
import configureStore from "redux-mock-store";

// const middlewares = [thunk];
const mockStore = configureStore([]);

jest.mock("axios");

describe("Products Thunk", () => {
  it("creates SUCCESS when fetching data has been done", async () => {
    const mockData = { data: "some data" };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

    const expectedActions = [
      { type: "product/fetchData/pending", meta: expect.any(Object) },
      {
        type: "product/fetchData/fulfilled",
        payload: mockData,
        meta: expect.any(Object),
      },
    ];
    console.log("Dispatching fetchData...");
    const initialState = {};
    const store = mockStore(initialState);

    await store.dispatch(fetchData() as unknown as AnyAction);

    console.log("Actions dispatchées : ", store.getActions());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
  // it( "dispatches product/fetchData/rejected when the API call fails", async () => {
  //   (axios.get as jest.Mock).mockRejectedValueOnce( new Error( "Failed to fetch data" ) );
  //
  //   const expectedActions = [
  //     { type: "product/fetchData/pending" },
  //     {
  //       type: "product/fetchData/rejected",
  //       payload: "Failed to fetch data",
  //       meta: expect.any( Object ),
  //       error: expect.any( Object ),
  //     },
  //   ];
  //
  //   const store = mockStore( {} ); // Création du store mock
  //
  //   // Dispatch de l'action asynchrone avec une erreur
  //   await store.dispatch( fetchData() as unknown as AnyAction ); // Typage de dispatch pour les actions asynchrones
  //
  //   const actions = store.getActions();
  //   expect( actions ).toEqual( expectedActions );
  // } );
});

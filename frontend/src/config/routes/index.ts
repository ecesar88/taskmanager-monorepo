class Routes {
  public LANDING_PAGE = "/";
  public HOME = "/app";
  public TASKS = `${this.HOME}/tasks`;
  public CALENDAR = `${this.HOME}/calendar`;
  public NOTES = `${this.HOME}/notes`;
}

const ROUTES = new Routes();
export { ROUTES };
